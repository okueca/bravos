class ActivitiesController < ApplicationController
  before_action :set_activity, only: %i[ show edit update destroy ]

  # GET /activities or /activities.json
  def index
    @activities = Activity.all
  end

  # GET /activities/1 or /activities/1.json
  def show
  end

  # GET /activities/new
  def new
    @activity = Activity.new
  end

  # GET /activities/1/edit
  def edit
  end
  
  def success_payment
    activity_success = Activity.find(params[:id])
    payment = activity_success.payments.find_by(user_id: current_user.id)
    payment.update(status: "completed")
    respond_to do |format|
      format.html { redirect_to activity_url(activity_success),  notice: "Participou na atividade" }
      format.json { head :no_content }
    end
  end

  # GET /participate_activity

  def participate_activity
    pay = Payment.new(method: "card", user_id: current_user.id , activity_id: params[:id])
    respond_to do |format|
      if pay.save
        s = pay.process_payment(pay.amount, pay.activity , "#{success_payment_path(pay.activity)}")
        format.html { redirect_to s.url, allow_other_host: true, notice: "Participou na atividade" }
        format.json { head :no_content }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @post.errors, status: :unprocessable_entity }
      end
    end
  end

  # POST /activities or /activities.json
  def create
    @activity = Activity.new(activity_params)

    respond_to do |format|
      if @activity.save
        format.html { redirect_to activity_url(@activity), notice: "Atividade criada com sucesso." }
        format.json { render :show, status: :created, location: @activity }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @activity.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /activities/1 or /activities/1.json
  def update
    respond_to do |format|
      if @activity.update(activity_params)
        format.html { redirect_to activity_url(@activity), notice: "Atividade atualizada com sucesso." }
        format.json { render :show, status: :ok, location: @activity }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @activity.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /activities/1 or /activities/1.json
  def destroy
    @activity.destroy!

    respond_to do |format|
      format.html { redirect_to activities_url, notice: "Atividade eliminada com sucesso." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_activity
      @activity = Activity.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def activity_params
      params.require(:activity).permit(:name, :location, :date_text, :start_hour, :end_hour, :date_start, :date_end, :price, :price_by, :description)
    end
end
