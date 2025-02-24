import '../resources/styles/common.css';
import './index.css';

import React from 'react';
import * as PRSS from 'prss';

import cx from 'classnames';

import Header from '../resources/components/Header';
import Footer from '../resources/components/Footer';
import Page from '../resources/components/Page';
import Hero from '../resources/components/Hero';
import { isset } from '../resources/services/utils';
import Aside from '../resources/components/Aside';

const Post = data => {
  PRSS.init(data);
  (window as any).PRSS = PRSS;

  const {
    heroTitle,
    heroMessage,
    heroImageUrl,
    featuredImageUrl,
    featuredImageAuthor,
    featuredImageAuthorLink,
    sidebarAsideHtml,
    heroClass
  } = PRSS.getProp('vars') as any;

  const { content, uuid: postId, title: postTitle, createdAt } = PRSS.getProp(
    'item'
  );
  const sidebarHtml = PRSS.getProp('sidebarHtml');

  const items = PRSS.getItems('post').filter(item => item.uuid !== postId);
  const shuffledItem = PRSS.shuffle(items)[0];

  return (
    <Page className="page-post">
      <Header />
      {(postTitle || heroTitle) && (
        <Hero imageUrl={featuredImageUrl || heroImageUrl} heroClass={heroClass}>
          <div>
            {(postTitle || heroTitle) && (
              <h1 className="hero-title">{heroTitle || postTitle}</h1>
            )}
            {heroMessage && (
              <div className="hero-message mt-4">{heroMessage}</div>
            )}
            {createdAt && (
              <div
                className="mt-3 date post-date d-flex align-items-center"
                title={PRSS.formattedDate(createdAt)}
              >
                <i className={`fa fa-clock-o mr-2`}></i>
                <span>Published on {PRSS.formattedDate(createdAt)}</span>
              </div>
            )}
          </div>
          {featuredImageUrl && featuredImageAuthor && (
            <div className="hero-image-author">
              Photo by{' '}
              {featuredImageAuthorLink && (
                <a
                  href={featuredImageAuthorLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {featuredImageAuthor} via Pexels
                </a>
              )}
            </div>
          )}
        </Hero>
      )}
      <main>
        <div className="container main-container">
          <div className="row">
            <div className="col">
              <div className="content">
                {content && content.trim().length && (
                  <section className="post-content mt-4 mb-3 pb-5">
                    <div
                      className="post-inner-content"
                      dangerouslySetInnerHTML={{
                        __html: content
                      }}
                    />
                  </section>
                )}

                {shuffledItem && (
                  <section className="mb-3">
                    <h4 className="section-title">
                      <span>Explore More</span>
                    </h4>

                    <div className="mt-4 mb-4">
                      <div className="card mb-3 d-flex flex-row">
                        {/*shuffledItem.vars?.featuredImageUrl && (
                          <div className="col-2 p-0">
                            <a
                              className={cx('card-img-left', {
                                'card-has-img': !!shuffledItem.vars
                                  ?.featuredImageUrl
                              })}
                              href={shuffledItem.url}
                            >
                              {shuffledItem.vars?.featuredImageUrl && (
                                <img
                                  src={shuffledItem.vars?.featuredImageUrl}
                                  alt={shuffledItem.vars?.featuredImageAlt}
                                  loading="lazy"
                                />
                              )}
                            </a>
                          </div>
                        )*/}

                        <div className="card-body col">
                          {shuffledItem.title && (
                            <a className="card-title" href={shuffledItem.url}>
                              {shuffledItem.title}
                            </a>
                          )}

                          {shuffledItem.content && (
                            <p className="card-text">{shuffledItem.content}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </section>
                )}
              </div>
            </div>
            {isset(sidebarHtml || sidebarAsideHtml) && (
              <div className="col-3 page-sidebar">
                <div
                  className="page-sidebar-content"
                  dangerouslySetInnerHTML={{
                    __html: sidebarHtml
                  }}
                />
                <Aside name="sidebarAsideHtml" />
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </Page>
  );
};

export default Post;
