import * as React from 'react'
import classNames from 'classnames';
/*  
    Basic Prop Types Examples
    https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example#basic-prop-types-examples

    Useful React Prop Type Examples
    https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example#useful-react-prop-type-examples
 */

type TouchFeedbackProps = {
    disabled?: boolean;
    activeClassName?: string;
    activeStyle?: React.CSSProperties;
    children?: any;
}
type TouchFeedbackState = {
    active: boolean;
}
/* 
    types or interfaces
    https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example#types-or-interfaces
 */

export default class TouchFeedback extends React.Component<TouchFeedbackProps, TouchFeedbackState> {

    static defaultProps = {
        disabled: false,
      };

    state: TouchFeedbackState = {
      active: false
    };

    componentDidUpdate() {
        if (this.props.disabled && this.state.active) {
          this.setState({
            active: false,
          });
        }
      }

      triggerEvent(type:string, isActive: boolean, event:Event) {
        const eventType = `on${type}`;
        const { children } = this.props;
    
        if (children.props[eventType]) {
          children.props[eventType](event);
        }
        if (isActive !== this.state.active) {
          this.setState({
            active: isActive,
          });
        }
      }
    
      onTouchStart = (e:Event) => {
        this.triggerEvent('TouchStart', true, e);
      }
    
      onTouchMove = (e:Event) => {
        this.triggerEvent('TouchMove', false, e);
      }
    
      onTouchEnd = (e:Event) => {
        this.triggerEvent('TouchEnd', false, e);
      }
    
      onTouchCancel = (e:Event) => {
        this.triggerEvent('TouchCancel', false, e);
      }
    
      onMouseDown = (e:Event) => {
        // pc模拟手机端
        this.triggerEvent('MouseDown', true, e);
      }
    
      onMouseUp = (e:Event) => {
        this.triggerEvent('MouseUp', false, e);
      }
    
      onMouseLeave = (e:Event) => {
        this.triggerEvent('MouseLeave', false, e);
      }

      render() {
        const { children, disabled, activeClassName, activeStyle } = this.props;
    
        const events = disabled ? undefined : {
          onTouchStart: this.onTouchStart,
          onTouchMove: this.onTouchMove,
          onTouchEnd: this.onTouchEnd,
          onTouchCancel: this.onTouchCancel,
          onMouseDown: this.onMouseDown,
          onMouseUp: this.onMouseUp,
          onMouseLeave: this.onMouseLeave,
        };
    
        const child = React.Children.only(children);
        // https://zh-hans.reactjs.org/docs/react-api.html#reactchildrenonly
    
        if (!disabled && this.state.active) {
          let { style, className } = child.props;
    
          if (activeStyle !== false) {
            if (activeStyle) {
              style = {...style, ...activeStyle };
            }
            className = classNames(className, activeClassName);
          }
    
          return React.cloneElement(child, {
            className,
            style,
            ...events,
          });
        }

        // https://zh-hans.reactjs.org/docs/react-api.html#cloneelement
        return React.cloneElement(child, events);
      }
  }

