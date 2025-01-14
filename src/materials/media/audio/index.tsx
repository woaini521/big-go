/* eslint-disable react/display-name */
import React, { memo } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import styled from 'styled-components';
import { IAudioConfig } from './schema';

const AudioWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;
/**
 * isTemplate : 是否是模版
 */
type Props = IAudioConfig & { isTemplate: boolean };

const AudioPlayer = memo((props: Props) => {
  const { height, url, isTemplate } = props;
  return (
    <>
      {isTemplate ? (
        <div>
          <img
            src='./../../../asset/template-img/audio.png'
            style={{ width: '100px',height:`${height}px` }}
            alt='big-gago-音频播放组件'
          ></img>
        </div>
      ) : (
        <AudioWrapper>
          <ReactAudioPlayer
            src={url}
            autoPlay={false}
            controls
            style={{
              width: '100%',
              height: height + 'px',
            }}
          />
        </AudioWrapper>
      )}
    </>
  );
});

export default AudioPlayer;
