class CreateCities < ActiveRecord::Migration[5.2]
  def change
    create_table :cities do |t|
      t.references :user, index: true
      t.string :city, null: false
      t.string :country, null: false, limit: 3
      t.timestamps
    end
    add_foreign_key :cities, :users
  end
end
