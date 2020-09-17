class AddDetailsToOperas < ActiveRecord::Migration[6.0]
  def change
    add_reference :operas, :role, foreign_key: true
  end
end
