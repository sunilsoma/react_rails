class Api::RegistrationsController < Devise::RegistrationsController
  # skip_before_action :verify_authenticity_token

  # def create
  #   build_resource(sign_up_params)

  #   if resource.save
  #     sign_in(resource)
  #     render json: { user: resource, message: 'Registration successful.' }
  #   else
  #     render json: { errors: resource.errors.full_messages }, status: :unprocessable_entity
  #   end
  # end

  # private

  # def sign_up_params
  #   params.require(:user).permit(:email, :password, :password_confirmation)
  # end

  respond_to :json

  private

  def respond_with(resource, _opts = {})
    register_success && return if resource.persisted?

    register_failed
  end

  def register_success
    render json: { message: 'Signed up sucessfully.' }
  end

  def register_failed
    render json: { message: "Something went wrong." }
  end
end
