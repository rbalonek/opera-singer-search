class CreateBlogs < ActiveRecord::Migration[6.0]
  def change
    create_table :blogs do |t|
      t.string :title
      t.string :opera_company
      t.string :date
      t.string :img
      t.text :text
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
