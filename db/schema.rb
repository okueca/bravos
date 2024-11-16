# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2024_11_01_135255) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "activities", force: :cascade do |t|
    t.string "name"
    t.date "date_start"
    t.date "date_end"
    t.string "date_text"
    t.float "price", default: 0.0
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "kind"
    t.text "description"
    t.integer "price_by"
    t.string "start_hour"
    t.string "end_hour"
    t.string "location"
  end

  create_table "games", force: :cascade do |t|
    t.bigint "first_team_id"
    t.bigint "second_team_id"
    t.string "result"
    t.integer "status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["first_team_id"], name: "index_games_on_first_team_id"
    t.index ["second_team_id"], name: "index_games_on_second_team_id"
  end

  create_table "members", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "team_id", null: false
    t.integer "role"
    t.index ["team_id"], name: "index_members_on_team_id"
  end

  create_table "payments", force: :cascade do |t|
    t.string "method"
    t.bigint "user_id", null: false
    t.bigint "activity_id", null: false
    t.float "amount"
    t.integer "status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["activity_id"], name: "index_payments_on_activity_id"
    t.index ["user_id"], name: "index_payments_on_user_id"
  end

  create_table "team_members", force: :cascade do |t|
    t.bigint "team_id", null: false
    t.bigint "member_id", null: false
    t.integer "role"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["member_id"], name: "index_team_members_on_member_id"
    t.index ["team_id"], name: "index_team_members_on_team_id"
  end

  create_table "teams", force: :cascade do |t|
    t.string "name"
    t.text "image"
    t.integer "status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "description"
    t.bigint "user_id", null: false
    t.index ["user_id"], name: "index_teams_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name"
    t.integer "role"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "games", "teams", column: "first_team_id"
  add_foreign_key "games", "teams", column: "second_team_id"
  add_foreign_key "members", "teams"
  add_foreign_key "payments", "activities"
  add_foreign_key "payments", "users"
  add_foreign_key "team_members", "members"
  add_foreign_key "team_members", "teams"
  add_foreign_key "teams", "users"
end
