class Opera < ApplicationRecord
  has_many :roles, dependent: :destroy
end
