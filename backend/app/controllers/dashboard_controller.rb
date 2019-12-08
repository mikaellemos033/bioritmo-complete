class DashboardController < ApplicationController
  def index
    render json: {name: "Mikael Lemos", email: "mikaellemos033@gmail.com"}
  end
end
