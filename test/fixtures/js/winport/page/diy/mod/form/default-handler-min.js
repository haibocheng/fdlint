(function(f,d){var a=d.widget.FormUtil,c=d.diy.Msg,g=d.diy.form.BaseHandler;var b=f.extendIf({init:function(){g.init.apply(this,arguments);this.__$titleInput=f("input[name=title]",this.form);this.__$titleInput.closest("dd").find("span.err").addClass("message");this.__$handleEvent()},__$handleEvent:function(){var h=this,i=this.__$titleInput;i.bind("input propertychange",function(){f.trim(i.val())&&h.__$showTitleError(false)});i.bind("blur",function(){h.__$validateTitle()})},__$validateTitle:function(){var h=f.trim(this.__$titleInput.val());if(!h){this.__$showTitleError("���ⲻ��Ϊ��");return false}if(/[~'"@#$?&<>\/\\]/.test(h)){this.__$showTitleError("���⺬�зǷ��ַ�����������");return false}return true},validate:function(){return this.__$validateTitle()},__$showTitleError:function(h){return a.showMessage(this.__$titleInput,h,"error");return this.showError(this.__$titleInput,h)},_afterSubmit:function(h){var i=this.dialog;if(h.success){this._refreshBox();i.close();c.info("���ð��ɹ�")}else{h.data&&f.each(h.data,function(j,k){var l=f(':input[name="'+k.fieldName+'"]',i.node);a.showMessage(l,k.message,"error")});c.error("���ð��ʧ��")}}},g);var e=b;d.diy.form.SimpleHandler=b;d.diy.form.DefaultHandler=e})(jQuery,Platform.winport);