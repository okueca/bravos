json.extract! game, :id, :first_team_id, :second_team_id, :result, :status, :created_at, :updated_at
json.url game_url(game, format: :json)
