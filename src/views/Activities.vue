<template>
  <div class="activities-wrapper">
    <!-- banner wrapper start-->
    <section class="banner-wrapper"></section>
    <!-- banner wrapper end-->
    <!-- card wrapper start-->
    <section class="history-activities-wrapper">
      <div
        class="activity-card"
        v-for="activity in activities"
        :key="activity.id"
      >
        <div class="card-header">
          <img
            class="card-image"
            :src="
              activity.previewImage ||
              'https://github.com/LearnWeb-Taiwan/Assets/blob/master/common/logo-rectangle-v1.0.png?raw=true'
            "
            :alt="activity.title"
          />
          <div class="card-type">{{ activity.type }}</div>
        </div>
        <div class="card-body">
          <div class="card-speaker">
            <img
              class="speaker-image"
              :src="activity.speaker.image"
              :alt="activity.speaker.name"
            />
            <div class="speaker-info">
              <div class="speaker-name">{{ activity.speaker.name }}</div>
              <div class="speaker-link">
                <template v-if="activity.speaker.facebook">
                  <a
                    class="facebook"
                    :href="activity.speaker.facebook"
                    target="_blank"
                    ref="noopener"
                    alt="facebook"
                  >
                    <i class="fab fa-facebook"></i>
                  </a>
                </template>
                <template v-if="activity.speaker.website">
                  <a
                    class="website"
                    :href="activity.speaker.website"
                    target="_blank"
                    ref="noopener"
                    alt="personal website"
                  >
                    <i class="fas fa-columns"></i>
                  </a>
                </template>
                <template v-if="activity.speaker.github">
                  <a
                    class="github"
                    :href="activity.speaker.github"
                    target="_blank"
                    ref="noopener"
                    alt="GitHub Pages"
                  >
                    <i class="fab fa-github"></i>
                  </a>
                </template>
              </div>
            </div>
          </div>
          <h2 class="card-title">{{ activity.title }}</h2>
          <div class="card-tag" v-for="tag in activity.tag" :key="tag">
            {{ tag }}
          </div>
          <div class="card-content">
            {{ activity.content }}
          </div>
          <div class="card-info">
            <div class="card-location">
              <div class="name">{{ activity.location.name }}</div>
              <!-- <div class="address">{{ activity.location.address }}</div> -->
            </div>
            <div class="card-date">
              {{ formatDate(activity.date) }}
            </div>
          </div>
        </div>
        <div class="card-btn">
          <template v-if="new Date() > new Date(activity.date)">
            <div class="link disable">活動已結束</div>
          </template>
          <template v-else-if="activity.ticket">
            <a
              class="link"
              :href="activity.ticket"
              target="_blank"
              ref="noopener"
              >報名活動</a
            >
          </template>
          <template v-else>
            <div class="link disable">該活動未提供售票</div>
          </template>
        </div>
      </div>
    </section>
    <!-- card wrapper end-->
  </div>
</template>
<script>
import activities from '@/assets/json/activities.json'

export default {
  name: 'activities',
  components: {},
  data() {
    return {
      activities: activities,
    }
  },
  mounted() {
    activities.sort((a, b) => {
      return b.id - a.id
    })
  },
  methods: {
    diffDays(date, otherDate) {
      return Math.ceil(Math.abs(date - otherDate) / (1000 * 60 * 60 * 24))
    },
    formatDate(date) {
      let formatDate = new Date(
        +new Date(date) + +8 * 3600 * 1000
      ).toISOString()
      return formatDate.slice(0, 10) + ' ' + formatDate.slice(11, 19)
    },
  },
}
</script>

<style lang="scss">
.activities-wrapper {
  font-family: 'Noto_Sans_TC';
}
.history-activities-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  justify-items: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  .activity-card {
    overflow: hidden;
    max-width: 320px;
    margin: 0 24px 24px;
    background: white;
    box-shadow: 0 8px 24px 0 #0005;
    border-radius: 4px;
    transition: 0.5s;
    flex-basis: 320px;
    flex-grow: 1;
    &:hover {
      box-shadow: 0 20px 40px 0 #0006;
    }
    .card-header {
      position: relative;
      display: flex;
      align-items: center;
      min-height: 157px;
      background: rgb(250, 250, 250);
      .card-image {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    .card-body {
      padding: 16px 16px 0;
      .card-speaker {
        display: flex;
        margin-bottom: 12px;
        .speaker-image {
          display: inline-block;
          vertical-align: top;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          object-fit: cover;
          margin-right: 12px;
        }
        .speaker-info {
          flex-grow: 1;
          display: flex;
          justify-content: space-between;
          line-height: 36px;
          .speaker-name {
            display: inline-block;
            margin-right: 4px;
            font-weight: bold;
          }
          .speaker-link {
            display: inline-block;
            > a {
              width: 24px;
              margin-left: 8px;
              display: inline-block;
              font-size: 24px;
            }
          }
        }
      }
      .card-title {
        font-size: 20px;
        margin-bottom: 12px;
        color: #4f74af;
        font-family: Helvetica, Noto_Sans_TC;
        line-height: 24px;
      }
      .card-content {
        margin-bottom: 16px;
        line-height: 24px;
        font-size: 14px;
      }
      .card-tag {
        display: inline-block;
        border: 1px solid black;
        padding: 4px;
        font-size: 12px;
        border-radius: 2px;
        margin-right: 8px;
        margin-bottom: 8px;
      }
      .card-info {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        line-height: 20px;
        font-size: 14px;
        color: gray;
        margin-bottom: 8px;
      }
    }
    .card-type {
      position: absolute;
      top: 0;
      right: 16px;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      font-family: 'Noto_Sans_TC';
      padding: 6px;
      background: #0008;
      color: #fafafa;
    }
    .card-btn {
      .link {
        display: block;
        padding: 12px;
        text-align: center;
        background: #4f74af;
        color: white;
        cursor: pointer;
        &.disable {
          background: gray;
          cursor: not-allowed;
        }
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  .history-activities-wrapper {
    .activity-card {
      max-width: 100%;
    }
  }
}
</style>
