module TemperatureHelper
  def self.kelvin(value)
    value + 273.15
  end

  def self.fahrenheit(value)
    (value * 9) / 5 + 32
  end
end