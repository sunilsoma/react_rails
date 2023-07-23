class Api::Users::SessionsController < Devise::SessionsController
  skip_before_action :verify_authenticity_token

  # def create
  #   self.resource = warden.authenticate!(auth_options)
  #   sign_in(resource_name, resource)
  #   render json: { user: resource, message: 'Login successful.' }
  # end

  # def destroy
  #   signed_out = (Devise.sign_out_all_scopes ? sign_out : sign_out(resource_name))
  #   render json: { message: 'Logout successful.' }
  # end

  # private

  # def respond_to_on_destroy
  #   head :no_content
  # end

  respond_to :json

  private

  def respond_with(resource, _opts = {})
    render json: { message: 'You are logged in.' }, status: :ok
  end

  def respond_to_on_destroy
    log_out_success && return if current_user

    log_out_failure
  end

  def log_out_success
    render json: { message: "You are logged out." }, status: :ok
  end

  def log_out_failure
    render json: { message: "Hmm nothing happened."}, status: :unauthorized
  end
end
