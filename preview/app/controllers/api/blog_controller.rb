module Api
  class BlogController < ApplicationController
    include ActionController::MimeResponds
    respond_to :json

    def recent_blog_posts
      render json: [
        {
          title: "Achieving exactly-once delivery with Ably",
          link:
            "https://www-stats.ably.io/blog/achieving-exactly-once-message-processing-with-ably/",
          pubDate: "Tue, 17 Nov 2020 12:21:08 GMT".to_time.strftime('%b %e, %Y')
        },
        {
          title: "Why Ably integrates with functions instead of delivering them",
          link: "https://www-stats.ably.io/blog/why-we-dont-offer-functions/",
          pubDate: "Tue, 28 Jul 2020 18:56:47 GMT".to_time.strftime('%b %e, %Y')
        },
        {
          title: "Adventures in BEAM optimization with our MQTT adapter",
          link: "https://www-stats.ably.io/blog/beam-optimization-mqtt/",
          pubDate: "Fri, 17 Jul 2020 09:09:45 GMT".to_time.strftime('%b %e, %Y')
        },
      ]
    end
  end
end
