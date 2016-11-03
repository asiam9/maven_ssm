/**
 * Created by houdong on 16/8/26.
 */

module.exports = {

    dateTransform:function (timestamp) {
        let date = new Date(timestamp);
        return date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
    }
};