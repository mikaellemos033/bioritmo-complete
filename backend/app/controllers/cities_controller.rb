class CitiesController < AuthController
  def index    
    render json: current_user.cities
  end

  def create    
    city = current_user.cities.create(city_params)
    render json: city
  end

  def destroy
    city = current_user.cities.find(params[:id])
    
    if city
      city.destroy
      render json: city
    else
      head :unauthorized
    end
  end

  private

  def city_params
    params.require(:city).permit(:city, :country)
  end
end
