class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :user_img
      t.text :bio
      t.string :email
      t.string :password_digest
      t.references :role, optional: true, foreign_key: true

      t.timestamps
    end
  end
end
