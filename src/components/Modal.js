import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';

const Modal = React.createClass({
  propTypes: {
    title: PropTypes.string,
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
    const { title, children } = this.props;
    return (
      <div className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" data-dismiss="modal" className="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title">{title}</h4>
            </div>
            <div className="modal-body">
              {children}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick={this.handleHideModal}>Close</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default withRouter(Modal);
