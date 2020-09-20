class AddDetailsToRoles < ActiveRecord::Migration[6.0]
  def change
    add_column :roles, :opera, :string
  end
end
