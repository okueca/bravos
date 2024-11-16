class Payment < ApplicationRecord
    belongs_to :activity
    belongs_to :user
    validates  :user_id, presence: true
    validates  :activity_id, presence: true
    validates  :status, presence: true
    enum status: [:inprogress, :completed, :fail], _default: :inprogress
    before_save :set_amount

    def process_payment(amount, activity, success_url)
        stripe_prices = []
        
        price = Stripe::Price.create({
                    currency: 'EUR',
                    unit_amount: activity.price.to_i * 100,
                    product_data: {name: activity.name}
                })
        stripe_prices.push({price: price.id, quantity: 1})
       
        s = Stripe::Checkout::Session.create({
                success_url: "http://localhost:3000/#{success_url}",
                line_items: stripe_prices,
                payment_method_types: ["card"],
                automatic_tax:{
                    enabled: true
                },
                billing_address_collection: "auto",
                invoice_creation:{
                    enabled: true
                },
                mode: 'payment'
            })
        return s
    end

    def set_amount
        activity_id = self.activity_id
        self.amount = 0
        activity = Activity.find(activity_id)
        self.amount = activity.price
    end
    
end
