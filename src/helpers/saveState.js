export default {
  watch: {
    data: {
      handler() {
        this.saveState();
      },
      deep: true,
    },
  },

  created() {
    this.loadState();
    this.populate();
  },

  methods: {
    parseData(response) {
      this.data = this.mapResponse(response);

      let timestamp = (this.getTimestamp() + this.timeout);
      localStorage.setItem(this.$options.name+'-updated', timestamp);
      this.updated = timestamp;
    },
    populate() {
      setTimeout(this.populate, (this.timeout*1000));
      if (this.updated > 0 && (this.getTimestamp() <= this.updated)) {
        return;
      }
      console.log('['+this.$options.name+'] requesting data from api!');
      this.getData();
    },


    loadState() {
      let savedState = this.getSavedState();
      if (!savedState) {
        return;
      }

      this.data = savedState;
      this.updated = localStorage.getItem(this.$options.name+'-updated');
    },

    saveState() {
      localStorage.setItem(this.$options.name, JSON.stringify(this.data));
    },

    getSavedState() {
      let savedState = localStorage.getItem(this.$options.name);
      if (savedState) {
        savedState = JSON.parse(savedState);
      }

      return savedState;
    },

    getTimestamp() {
      return parseInt(new Date().getTime()/1000);
    },
  },
};

