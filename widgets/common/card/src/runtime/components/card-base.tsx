/** @jsx jsx */
import {React, css, IMThemeVariables, AppMode, BrowserSizeMode} from 'jimu-core';
import {IMConfig, MIN_WIDGET_HEIGHT, MIN_WIDGET_WIDTH} from '../../config'
export interface CardProps{
  theme?: IMThemeVariables,
  widgetId?: string,
  cardStyle?: any,
  layouts?: any,
  browserSizeMode?: BrowserSizeMode,
  formatMessage?: (id: string, values?: {[key: string]: any}) => string,
  appMode?: AppMode,
  cardConfigs?: IMConfig,
  isHeightAuto: boolean,
  isWidthAuto: boolean,
}

export interface CardStates {}

export default class Card<P extends CardProps = CardProps, S extends CardStates = CardStates> extends React.PureComponent<P, S>{

  formatMessage = (id: string, values?: {[key: string]: any}) => {
    return this.props.formatMessage(id, values);
  }

  getWidgetSize = () => {
    const {isHeightAuto, isWidthAuto, cardConfigs} = this.props;

    const sizeStyle: any = {};
    if(isHeightAuto){
      sizeStyle.height = {value: `${cardConfigs.widgetHeight || MIN_WIDGET_HEIGHT}px`};
    }
    if(isWidthAuto){
      sizeStyle.width = {value: `${cardConfigs.widgetWidth || MIN_WIDGET_WIDTH}px`};
    }
    return sizeStyle;
  }

  getStyle = () => {
    const {widgetId} = this.props;
    return css`
    &{
      overflow: hidden;
    }
    .card-link {
      cursor: pointer;
    }
    ${'&.card-' + widgetId} {
      padding: 0;
      border: 0;
      background-color: transparent;
      height: 100%;
      position: relative;
      .card-content {
        width: 100%;
        height: 100%;
        /* overflow: hidden; */
        &>div {
          width: 100%;
          height: 100%;
        }
      }
    }
    .edit-mask {
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
    }
    .clear-background {
      background: transparent;
      z-index: 100;
    }
    .clear-background:focus {
      outline: none;
    }
    .surface-1 {
      border: none !important;
    }
    ${'&.card-' + widgetId}:hover {}
    `;
  }
}