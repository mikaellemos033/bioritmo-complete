class TemperaturesController < ApplicationController
  def index    
    unless params[:city].present?
      return render json: { error: 'parameter city is not present' }, status: 500
    end

    data = TemperatureClient.by_city(params[:city])
    render json: data
  end
end
