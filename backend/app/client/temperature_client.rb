class TemperatureClient
  def self.by_city(city)
    # Default temperature is celsius :D
    data = Openweather2.get_weather(city: city, units: 'metric').instance_values   
    celsius = data['temperature'].round(0)
    data[:temperature] = {celsius: celsius, kelvin: TemperatureHelper.kelvin(celsius).round(0), fahrenheit: TemperatureHelper.fahrenheit(celsius)}
    data
  end
end