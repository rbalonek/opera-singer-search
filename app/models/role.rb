class Role < ApplicationRecord
  belongs_to :opera
  has_and_belongs_to_many :users
end
