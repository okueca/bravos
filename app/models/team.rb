class Team < ApplicationRecord
    has_many :members, class_name: "Member"
    accepts_nested_attributes_for :members, reject_if: :all_blank, allow_destroy: true

end
