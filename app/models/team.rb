class Team < ApplicationRecord
    has_many :members, class_name: "Member"
    accepts_nested_attributes_for :members, reject_if: :all_blank, allow_destroy: true
    has_many :games, :class_name => 'Game', :foreign_key => 'first_team_id'
    has_many :games, :class_name => 'Game', :foreign_key => 'second_team_id'

    validates :name, presence: true

end
