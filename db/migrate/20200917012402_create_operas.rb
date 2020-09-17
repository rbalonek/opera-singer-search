class CreateOperas < ActiveRecord::Migration[6.0]
  def change
    create_table :operas do |t|
      t.string :name
      t.string :composer
      t.string :composer_img
      t.string :era

      t.timestamps
    end
  end
end
