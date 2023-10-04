import { defineStore } from 'pinia'
export const useComponentStore = defineStore('component', {
  state: () => ({
    // uniq code for every identity for components
    uid: 1,
    // state for global confirmation
    defaultConfirm: {
      show: false,
      title: 'm.general.confirm.title',
      desc: '',
      resolve: null,
      options: {
        i18n: false,
        label: {
          yes: 'm.general.confirm.yes',
          no: 'm.general.confirm.no'
        }
      }
    },
    confirm: {
      show: false,
      title: 'm.general.confirm.title',
      desc: '',
      resolve: null,
      options: {
        reason: false,
        i18n: false,
        label: {
          yes: 'm.general.confirm.yes',
          no: 'm.general.confirm.no'
        }
      },
      reasonResult: ''
    },
    // end state for global confirmation
    // state for loading overlay
    loadingOverlay: false,
    // end state for loading overlay
    // modal viewer file
    fileViewer: {
      show: false,
      items: []
    }
    // end viewer file
  }),
  actions: {
    setUid() {
      this.uid = this.uid + 1
    },
    // action for global confirmation
    openConfirm(payload) {
      this.confirm.show = true
      this.confirm.reasonResult = ''
      if (payload.title) {
        this.confirm.title = payload.title
      }
      this.confirm.desc = payload.desc
      this.confirm.options = Object.assign(this.confirm.options, payload.options)
      if (!this.confirm.options.i18n) {
        this.confirm.title = 'Konfirmasi'
        this.confirm.options.label = {
          yes: 'Ya',
          no: 'Tidak'
        }
      }
      return new Promise((resolve) => {
        this.confirm.resolve = resolve
      })
    },
    actionConfirm(status, reason) {
      this.confirm.reasonResult = reason
      this.confirm.resolve(status)
      this.confirm.show = false
      // set settings to default
      this.confirm = Object.assign(this.confirm, this.defaultConfirm)
    },
    // end action for global confirmation
    // action for loading overlay
    setLoading(data) {
      this.loadingOverlay = data
    },
    // end action for loading overlay
    // set viewer file
    setFileViewer(data) {
      this.fileViewer = data
    }
    // send viewer file
  }
})
