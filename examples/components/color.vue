<template>
    <div class="demo-color">
        <h3>主要色调</h3>
        <ul class="demo-color-list">
            <li class="brand-color"><span>Brand Color</span></li>
        </ul>

        <h3>辅助色</h3>
        <ul class="demo-color-list">
            <li class="success-color"><span>Success Color</span></li>
            <li class="warning-color"><span>Warning Color</span></li>
            <li class="danger-color"><span>Danger Color</span></li>
            <li class="info-color"><span>Info Color</span></li>
        </ul>

        <h3>七种色</h3>
        <ul class="demo-color-list">
            <li class="red-color"><span>赤色</span></li>
            <li class="orange-color"><span>橙色</span></li>
            <li class="green-color"><span>墨绿</span></li>
            <li class="cyan-color"><span>藏青</span></li>
            <li class="blue-color"><span>蓝色</span></li>
            <li class="black-color"><span>雅黑</span></li>
            <li class="gray-color"><span>银灰</span></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "color",
    data() {
        return {}
    },
    created() {
    }
}
</script>

<style lang="scss">
@import "src/theme/common/variables.scss";

.demo-color {
    color: $--text-color;

    h3 {
        margin: 55px 0 20px;
    }
}

.demo-color-list {
    display: flex;
    list-style: none;
    flex-wrap: wrap;

    li {
        width: 150px;
        height: 80px;
        border: 1px solid $--border-color;
        color: #fff;
        text-align: center;
        border-radius: 5px;
        line-height: 1.6;
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-right: 12px;
        margin-top: 12px;
    }

    .brand-color {
        background-color: $--color-brand;

        &:after {
            content: '#{$--color-brand}';
        }
    }


    .success-color {
        background-color: $--color-success;
        &:after {
            content: '#{$--color-success}';
        }
    }

    .warning-color {
        background-color: $--color-warning;
        &:after {
            content: '#{$--color-warning}';
        }
    }

    .danger-color {
        background-color: $--color-danger;
        &:after {
            content: '#{$--color-danger}';
        }
    }

    .info-color {
        background-color: $--color-info;
        &:after {
            content: '#{$--color-info}';
        }
    }

    .red-color {
        background-color: $--color-red;
        &:after {
            content: '#{$--color-red}';
        }
    }

    .orange-color {
        background-color: $--color-orange;
        &:after {
            content: '#{$--color-orange}';
        }
    }

    .green-color {
        background-color: $--color-green;
        &:after {
            content: '#{$--color-green}';
        }
    }

    .cyan-color {
        background-color: $--color-cyan;
        &:after {
            content: '#{$--color-cyan}';
        }
    }

    .blue-color {
        background-color: $--color-blue;
        &:after {
            content: '#{$--color-blue}';
        }
    }

    .black-color {
        background-color: $--color-black;
        &:after {
            content: '#{$--color-black}';
        }
    }

    .gray-color {
        background-color: $--color-gray;
        &:after {
            content: '#{$--color-gray}';
        }
    }
}
</style>
