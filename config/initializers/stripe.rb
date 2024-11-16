Rails.configuration.stripe ={
    publishable_key: ENV['STRIPE_PUBLISHABLE_BRAVOS'] ,
    secret_key: ENV['STRIPE_SECRET_KEY_BRAVOS']
}

Stripe.api_key = Rails.configuration.stripe[:secret_key]