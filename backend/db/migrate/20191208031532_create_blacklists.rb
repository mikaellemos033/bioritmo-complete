class CreateBlacklists < ActiveRecord::Migration[5.2]
  def change
    create_table :blacklists do |t|
      t.string :jti, null: false
      t.datetime :exp, null: false
      t.timestamps
    end
    add_index :blacklists, :jti
  end
end
