import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import pinyin from 'pinyin';
import underscore from 'underscore';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar();
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    Meteor.call("getMyIp", function(e,r){
      instance.counter.set(r)
    });

  },
  'keydown input': function (event) {
        if (event.keyCode === 13) {
            var query = $('.chinese').val();
            if (query)
                console.log(_.flatten(pinyin(query)).join(" "))
        }
    },
});
