import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';

const Modal = React.createClass({
  propTypes: {
    children: PropTypes.node,
    router: PropTypes.object.isRequired,
    returnTo: PropTypes.string
  },
  componentDidMount() {
    const dom = ReactDOM.findDOMNode(this);
    $(dom).modal('show');
    $(dom).on('hide.bs.modal', this.handleHideModal);
  },
  componentWillUnmount() {
    const dom = ReactDOM.findDOMNode(this);
    $(dom).modal('hide');
  },
  handleHideModal() {
    const { router, returnTo } = this.props;
    router.push(returnTo);
  },
  render() {
    const { children } = this.props;
    return (
      <div className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            {React.cloneElement(children, {
              onClose: this.handleHideModal
            })}
          </div>
        </div>
      </div>
    );
  }
});

export default withRouter(Modal);
