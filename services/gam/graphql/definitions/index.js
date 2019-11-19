const gql = require('graphql-tag');

module.exports = gql`

scalar Date
scalar ObjectID

type Query {
  ping: String!
  adunits(input: AdunitsQueryInput!): Adunit
}

type Mutation {
  ping: String!
}

type Adunit {
  id: ObjectID!
  name: String!
}

input AdunitsQueryInput {
  location: Location!
  position: Position!
  target: PosTarget # optional pos target. will filter # returned.
}

# 13 Locations
# db.getCollection('adunits').distinct('settings.location').sort();
enum Location {
  article
  author
  commodities
  forums_category
  forums_landing
  forums_topic
  gallery
  homepage
  page
  search
  taxonomy
  user
  weather
}

# 33 Positions
# db.getCollection('adunits').distinct('settings.position').sort();
enum Position {
  bottom_banner
  cash_grain_bids
  custom_content_channel_sponsored_header
  custom_content_channel_sponsored_resources
  hidden
  inarticle1
  inarticle2
  inarticle3
  inarticle4
  inarticlevid
  infinitescroll
  interstitial
  jumbotron
  left_rail_rect
  native_article_4
  native_category_1
  native_category_2
  native_category_3
  native_inline
  native_leftrail_1
  native_leftrail_2
  native_related
  native_top_stories
  native_top_stories_1
  native_umpu
  reveal
  right_col_jumbotron
  right_rail_rect
  sponsored_logo
  sponsored_logo_commodities
  sponsored_logo_weather
  third_cat_jumbotron
  top_banner
}

# NOTE: Enums cannot start with a number string.
# As such, position targets starting with a number have been prefixed with
# an underscore.
# 36 PosTargets
# db.getCollection('adunits').aggregate([
#   { $unwind: '$settings.targeting' },
#   { $match: { 'settings.targeting.target': 'pos' } },
#   { $group: { _id: null, pos: { $addToSet: '$settings.targeting.value' } } },
# ]).toArray()[0].pos.sort();
enum PosTarget {
  _300_1_lft
  _300_1_rht
  _300_2_lft
  _300_2_rht
  _300_3_rht
  _300_4_rht
  _728_10_a
  _728_1_a
  _728_2_a
  adhesion
  cashgrainwidgetlogo
  commodwidgetlogo
  customsponsoredlogo1
  customsponsoredlogo2
  footnote
  footnote_floor # was footnote,floor
  gallery_300_right
  gallery_728_a
  gallery_interstitial
  inarticlevideo_1_a
  nativekey_10
  nativekey_12_1
  nativekey_13_1
  nativekey_1_lft
  nativekey_2_lft
  nativekey_3
  nativekey_4
  nativekey_5
  nativekey_6
  nativekey_7
  nativekey_8
  oop_a
  reveal_1
  sponsoredlogo
  sponsoredlogo_weather
  wrap
}

`;
