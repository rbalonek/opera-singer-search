require 'test_helper'

class OperasControllerTest < ActionDispatch::IntegrationTest
  setup do
    @opera = operas(:one)
  end

  test "should get index" do
    get operas_url, as: :json
    assert_response :success
  end

  test "should create opera" do
    assert_difference('Opera.count') do
      post operas_url, params: { opera: { composer: @opera.composer, composer_img: @opera.composer_img, era: @opera.era, name: @opera.name } }, as: :json
    end

    assert_response 201
  end

  test "should show opera" do
    get opera_url(@opera), as: :json
    assert_response :success
  end

  test "should update opera" do
    patch opera_url(@opera), params: { opera: { composer: @opera.composer, composer_img: @opera.composer_img, era: @opera.era, name: @opera.name } }, as: :json
    assert_response 200
  end

  test "should destroy opera" do
    assert_difference('Opera.count', -1) do
      delete opera_url(@opera), as: :json
    end

    assert_response 204
  end
end
