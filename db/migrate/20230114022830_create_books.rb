class CreateBooks < ActiveRecord::Migration[7.0]
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.string :description
      t.decimal :price
      t.boolean :in_stock
      t.string :image

      t.timestamps
    end
  end
end
