/**
 * Created by houdong on 16/11/3.
 */

var React = require('react');
var DefaultLayout = React.createClass({

    /******************************************************************************
     * life cycle functions
     ******************************************************************************/
    getDefaultProps: function () {
        return {
            main: '',
        };
    },

    /******************************************************************************
     * render functions
     ******************************************************************************/
    render: function () {
        return (
            <div className="skin-purple-light sidebar-mini">
                <div className="wrapper">
                    {this.props.main}
                </div>
            </div>
        );
    }
});

module.exports = DefaultLayout;