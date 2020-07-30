"use strict";

var BlogPostComponent = {
  props: ['id'],
  data: function data() {
    return {
      blogPost: null
    };
  },
  created: function created() {
    var _this = this;

    axios.get('api/posts/' + this.id).then(function (response) {
      _this.blogPost = response.data;
    });
  }
};
//# sourceMappingURL=apiVue.js.map
