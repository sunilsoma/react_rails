class ReferralsController < ApplicationController
  def index
    @referrals = current_user.referrals
  end

  def create
    user_email = params[:email]

    Referral.create(user: current_user, email: user_email)
    ReferralMailer.referral_email(user_email).deliver_now

    redirect_to root_path, notice: 'Referral email sent successfully!'
  end
end
