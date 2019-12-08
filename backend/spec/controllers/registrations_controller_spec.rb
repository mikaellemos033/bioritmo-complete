require 'rails_helper'

RSpec.describe RegistrationsController, type: :controller do
  let(:path) { '/api/v1/temperatures' }

  describe 'GET /api/v1/temperatures' do
    it 'its ok' do
      get :index, {:params => {:city => 'São Paulo,br'}}
      expect(response.code).to eq('200')
    end

    it 'its wrong' do
      get :index
      expect(response.code).to eq('500')
    end
  end
end
