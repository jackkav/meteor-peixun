import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import pinyin from 'pinyin';

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
    // increment the counter when button is clicked
    console.log(pinyin('中心'))
    Meteor.call("getMyIp", function(e,r){
      instance.counter.set(r)
    });
    // instance.counter.set(instance.counter.get() + 1);
  },
});
