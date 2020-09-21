class Opera < ApplicationRecord
  has_many :roles, dependant: :destroy
end
