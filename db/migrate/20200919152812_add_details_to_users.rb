class AddDetailsToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :website, :string
    add_column :users, :city, :string
    add_column :users, :voice_type, :string
  end
end
