class ReferralMailer < ApplicationMailer
  def referral_email(user_email)
    @user_email = user_email
    @signup_url = signup_url

    mail(to: user_email, subject: 'Referral Email')
  end

  private

  def signup_url
    new_user_registration_url
  end
end
