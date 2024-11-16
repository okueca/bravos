class Activity < ApplicationRecord
  validates :name, presence: true
  validates :date_text, presence: true
  validates :start_hour, presence: true
  validates :end_hour, presence: true
  validates :location, presence: true
  enum price_by: [:group_activity, :person], _default: :group_activity
  enum kind: [:sport], _default: :sport
  before_save :set_dates
  has_many :payments
  private
    def set_dates
      dates = self.date_text.split(" to ")
      date_start = dates[0].split("-")
      if(dates.count > 1)
        date_end = dates[1].split("-")
      else
        date_end = date_start
      end
      self.date_start = Date.new(date_start[2].to_i,date_start[1].to_i,date_start[0].to_i)
      self.date_end = Date.new(date_end[2].to_i,date_end[1].to_i,date_end[0].to_i)
    end
end
