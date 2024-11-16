json.extract! activity, :id, :name, :date_start, :date_end, :date_text, :price, :created_at, :updated_at
json.url activity_url(activity, format: :json)
