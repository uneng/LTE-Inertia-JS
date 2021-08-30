<template>
  <Content>
    <template #header>
      <h2 class="h4 font-weight-bold">
        Profile
      </h2>
    </template>

    <div v-if="$page.props.jetstream.canUpdateProfileInformation">
      <update-profile-information-form :user="$page.props.user" />

      <jet-section-border />
    </div>

    <div v-if="$page.props.jetstream.canUpdatePassword">
      <update-password-form />

      <jet-section-border />
    </div>

    <div v-if="$page.props.jetstream.canManageTwoFactorAuthentication">
      <two-factor-authentication-form />

      <jet-section-border />
    </div>

    <logout-other-browser-sessions-form :sessions="sessions" />

    <template v-if="$page.props.jetstream.hasAccountDeletionFeatures">
      <jet-section-border />

      <delete-user-form />
    </template>
  </Content>
</template>

<script>
import Content from '@/components/Layouts/Content';
import DeleteUserForm from './DeleteUserForm'
import JetSectionBorder from '@/Jetstream/SectionBorder'
import LogoutOtherBrowserSessionsForm from './LogoutOtherBrowserSessionsForm'
import TwoFactorAuthenticationForm from './TwoFactorAuthenticationForm'
import UpdatePasswordForm from './UpdatePasswordForm'
import UpdateProfileInformationForm from './UpdateProfileInformationForm'

export default {
  props: ['sessions'],

  components: {
    Content,
    DeleteUserForm,
    JetSectionBorder,
    LogoutOtherBrowserSessionsForm,
    TwoFactorAuthenticationForm,
    UpdatePasswordForm,
    UpdateProfileInformationForm,
  },
}
</script>
