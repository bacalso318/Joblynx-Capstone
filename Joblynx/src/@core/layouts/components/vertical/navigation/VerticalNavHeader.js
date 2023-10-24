// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import { styled, useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

// ** Custom Icon Import
import Icon from 'src/@core/components/icon'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Styled Components
const MenuHeaderWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  paddingRight: theme.spacing(4),
  justifyContent: 'space-between',
  transition: 'padding .25s ease-in-out',
  minHeight: theme.mixins.toolbar.minHeight
}))

const HeaderTitle = styled(Typography)({
  fontWeight: 700,
  lineHeight: 1.2,
  transition: 'opacity .25s ease-in-out, margin .25s ease-in-out'
})

const StyledLink = styled(Link)({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none'
})

const VerticalNavHeader = props => {
  // ** Props
  const {
    hidden,
    navHover,
    settings,
    saveSettings,
    collapsedNavWidth,
    toggleNavVisibility,
    navigationBorderWidth,
    menuLockedIcon: userMenuLockedIcon,
    navMenuBranding: userNavMenuBranding,
    menuUnlockedIcon: userMenuUnlockedIcon
  } = props

  // ** Hooks & Vars
  const theme = useTheme()
  const { mode, direction, navCollapsed } = settings
  const menuCollapsedStyles = navCollapsed && !navHover ? { opacity: 0 } : { opacity: 1 }

  const svgFillSecondary = () => {
    if (mode === 'semi-dark') {
      return `rgba(${theme.palette.customColors.dark}, 0.6)`
    } else {
      return theme.palette.text.secondary
    }
  }

  const svgFillDisabled = () => {
    if (mode === 'semi-dark') {
      return `rgba(${theme.palette.customColors.dark}, 0.38)`
    } else {
      return theme.palette.text.disabled
    }
  }

  const menuHeaderPaddingLeft = () => {
    if (navCollapsed && !navHover) {
      if (userNavMenuBranding) {
        return 0
      } else {
        return (collapsedNavWidth - navigationBorderWidth - 40) / 8
      }
    } else {
      return 5.5
    }
  }

  const svgRotationDeg = () => {
    if (navCollapsed) {
      if (direction === 'rtl') {
        if (navHover) {
          return 0
        } else {
          return 180
        }
      } else {
        if (navHover) {
          return 180
        } else {
          return 0
        }
      }
    } else {
      if (direction === 'rtl') {
        return 180
      } else {
        return 0
      }
    }
  }

  return (
    <MenuHeaderWrapper className='nav-header' sx={{ pl: menuHeaderPaddingLeft() }}>
      {userNavMenuBranding ? (
        userNavMenuBranding(props)
      ) : (
        <StyledLink href='/'>
          <svg width={60} fill='none' height={70} viewBox='5 0 230 200' xmlns='http://www.w3.org/2000/svg'>
          <g>
              <path d="M 75.833 6.501 C 75.557 6.776, 76.270 9.026, 77.416 11.500 L 79.500 15.998 80.667 15.999 L 81.833 16 82.797 13.250 L 83.762 10.500 84.856 13.250 L 85.950 16 87.354 16 L 88.757 16 89.812 13.250 C 90.391 11.738, 91.151 9.488, 91.500 8.250 L 92.135 6 90.981 6 L 89.826 6 88.708 8.964 L 87.589 11.928 86.343 8.964 L 85.097 6 83.628 6 L 82.159 6 81.441 9.250 L 80.724 12.500 79.181 9.250 C 77.689 6.108, 76.885 5.448, 75.833 6.501 M 93.777 10.750 C 93.263 16.495, 92.929 15.992, 97.626 16.525 L 101.500 16.963 98.750 15.789 L 96 14.614 96 13.480 L 96 12.346 99 12.787 L 102 13.227 102 12.197 L 102 11.167 99.250 10.162 L 96.500 9.158 99.750 9.079 L 103 9 103 8.125 L 103 7.250 99.875 6.625 C 98.156 6.281, 96.177 6, 95.476 6 L 94.201 6 93.777 10.750 M 58.750 9.666 L 57 10.147 57 11.207 C 57 11.791, 57.521 14.008, 58.158 16.134 L 59.317 20 61.436 20 L 63.555 20 65.832 18.405 L 68.109 16.810 67.805 13.155 L 67.500 9.500 64 9.343 C 62.075 9.257, 59.712 9.402, 58.750 9.666 M 110.525 9.959 L 109.944 10.900 112.050 12.027 L 114.155 13.153 113.573 14.670 C 113.253 15.504, 112.720 17.269, 112.387 18.593 L 111.783 21 112.706 21 L 113.630 21 115.308 17.479 L 116.987 13.959 119.494 14.588 L 122 15.217 122 14.225 L 122 13.233 120.250 12.725 C 119.287 12.446, 116.837 11.498, 114.803 10.618 L 111.107 9.018 110.525 9.959 M 60.587 11.859 L 59.986 12.832 60.983 15.456 L 61.981 18.080 64.051 16.973 L 66.121 15.865 65.811 13.682 L 65.500 11.500 63.344 11.193 L 61.189 10.886 60.587 11.859 M 47.223 14.557 L 45 16.113 45 18.985 L 45 21.857 46.571 23.429 C 48.518 25.375, 49.353 25.386, 52.979 23.511 L 55.858 22.022 56.482 20.057 L 57.106 18.091 55.438 15.546 L 53.770 13 51.607 13 L 49.445 13 47.223 14.557 M 121.627 17.250 C 120.847 18.488, 119.906 20.512, 119.537 21.750 L 118.865 24 119.874 24 C 120.428 24, 121.160 23.550, 121.500 23 C 122.598 21.224, 123.780 21.930, 124.850 25 L 125.896 28 126.967 28 L 128.038 28 127.445 25.636 L 126.851 23.271 128.426 22.667 L 130 22.063 130 20.088 L 130 18.113 127.777 16.557 C 126.555 15.701, 124.990 15, 124.301 15 L 123.046 15 121.627 17.250 M 47.530 16.952 L 46.871 18.018 47.521 20.067 L 48.172 22.116 50.836 21.808 L 53.500 21.500 53.500 19 L 53.500 16.500 50.844 16.193 L 48.189 15.885 47.530 16.952 M 36.077 21.589 L 33 24.178 33 25.934 L 33 27.690 34.829 29.345 L 36.657 31 38.282 31 C 39.175 31, 41.027 30.489, 42.398 29.865 L 44.890 28.729 45.441 27.292 L 45.993 25.855 44.961 23.928 L 43.930 22 41.246 23.750 L 38.563 25.500 40.726 25.812 L 42.889 26.125 42.338 27.562 L 41.786 29 40.093 29 C 37.929 29, 36 27.078, 36 24.921 L 36 23.243 39 22 C 40.650 21.317, 42 20.362, 42 19.879 L 42 19 40.577 19 L 39.153 19 36.077 21.589 M 131.716 23.904 L 130 26.809 130 28.881 L 130 30.954 132.451 32.560 L 134.902 34.166 136.770 33.573 L 138.639 32.980 140.810 30.043 L 142.981 27.106 141.870 26.420 L 140.759 25.733 138.307 28.867 C 135.470 32.491, 134.461 32.730, 133.057 30.107 L 132.044 28.214 134.022 25.699 C 135.110 24.316, 136 22.693, 136 22.092 L 136 21 134.716 21 L 133.431 21 131.716 23.904 M 142.967 31.540 L 141.706 33.059 142.853 35.577 C 143.484 36.961, 143.986 38.635, 143.968 39.297 L 143.937 40.500 141.417 37.635 L 138.897 34.769 138.266 35.401 L 137.634 36.033 139.667 38.766 L 141.701 41.500 143.855 41.820 L 146.009 42.140 146.577 40.660 L 147.145 39.181 145.547 36.090 L 143.949 33 144.809 33 C 145.598 33, 148.274 35.762, 151.959 40.381 L 153.419 42.210 149.966 45.028 L 146.513 47.846 147.323 48.657 L 148.134 49.467 151.817 47.355 L 155.500 45.243 157.205 47.372 L 158.911 49.500 158.955 47.900 L 159 46.300 155.994 42.150 C 154.340 39.868, 152.589 38, 152.102 38 L 151.217 38 150.650 35.740 L 150.082 33.480 147.155 31.751 L 144.227 30.021 142.967 31.540 M 23 33.378 L 23 34.756 25.250 36.326 L 27.500 37.895 22.809 37.948 L 18.118 38 17.448 39.084 L 16.778 40.169 20.139 43.044 C 25.367 47.516, 28.056 46.870, 23.750 42.177 L 21.500 39.724 25.750 40.267 L 30 40.810 30.612 39.818 L 31.225 38.827 27.916 35.414 C 24.365 31.750, 23 31.185, 23 33.378 M 13.502 45.301 C 12.676 46.480, 12 47.843, 12 48.329 L 12 49.214 13.552 48.618 L 15.105 48.023 17.544 49.621 L 19.983 51.219 19.432 52.109 L 18.882 53 19.741 53 C 21.059 53, 23 50.761, 23 49.241 L 23 47.882 21.989 48.507 L 20.978 49.132 17.991 46.144 L 15.003 43.157 13.502 45.301 M 78.099 50.250 L 77.262 52.500 86.881 53.113 C 97.860 53.812, 97.710 53.854, 96.184 50.504 L 95.043 48 86.989 48 L 78.936 48 78.099 50.250 M 128.772 49.412 L 127.043 50.689 123.922 58.094 C 122.205 62.167, 120.487 65.836, 120.104 66.246 L 119.408 66.992 114.996 62.496 L 110.584 58 109.292 58 C 106.943 58, 107.929 59.483, 114.831 66.333 L 121.663 73.112 122.664 71.806 C 123.214 71.088, 124.254 68.925, 124.975 67 C 126.173 63.798, 128.664 57.998, 131.316 52.230 L 132.360 49.960 131.430 49.047 L 130.500 48.135 128.772 49.412 M 56.038 61.462 L 50.644 66.923 51.903 69.686 L 53.161 72.448 59.972 64.974 L 66.782 57.500 65.141 56.820 C 62.177 55.592, 61.487 55.944, 56.038 61.462 M 62.780 69.064 L 61.059 70.066 59.991 74.033 L 58.923 78 59.950 81.815 L 60.978 85.630 63.489 87.989 L 66 90.349 66 93.567 L 66 96.786 64.615 97.318 L 63.230 97.849 61.115 96.368 L 59 94.887 59 97.372 L 59 99.857 60.571 101.429 C 61.436 102.293, 62.786 103, 63.571 103 L 65 103 66.944 101.056 L 68.888 99.112 69.574 95.459 L 70.259 91.807 69.146 88.094 L 68.034 84.380 65.517 82.016 L 63 79.651 63 76.701 L 63 73.750 66 74.350 L 69 74.950 69 73.046 L 69 71.143 67.429 69.571 C 65.611 67.754, 65.119 67.700, 62.780 69.064 M 96.422 70.087 L 94.533 72.173 94.533 77.939 L 94.533 83.704 97.767 87.387 L 101 91.070 101 93.412 L 101 95.755 99.682 96.849 L 98.364 97.943 96.182 96.415 L 94 94.887 94 97.965 L 94 101.043 96.374 102.124 L 98.747 103.206 100.840 102.086 L 102.932 100.966 104.027 96.899 L 105.122 92.833 104.466 89.666 L 103.810 86.500 100.905 82.809 L 98 79.117 98 76.434 L 98 73.750 101 74.350 L 104 74.950 104 73.032 L 104 71.113 101.777 69.557 C 98.931 67.563, 98.683 67.588, 96.422 70.087 M 72.667 69.667 L 72 70.333 72 86.167 L 72 102 73.500 102 L 75 102 75.030 89.750 L 75.061 77.500 75.897 79 C 76.356 79.825, 77.033 82.525, 77.399 85 C 77.766 87.475, 78.552 92.336, 79.145 95.802 L 80.223 102.104 81.839 101.793 L 83.454 101.481 85.626 89.491 L 87.798 77.500 87.899 89.750 L 88 102 89.500 102 L 91 102 91 85.500 L 91 69 89.059 69 C 86.464 69, 86.237 69.501, 84.446 79.161 C 83.596 83.748, 82.619 88.400, 82.275 89.500 L 81.651 91.500 79.833 81.500 C 78.833 76, 77.801 70.938, 77.539 70.250 L 77.063 69 75.198 69 C 74.172 69, 73.033 69.300, 72.667 69.667 M 107 85.500 L 107 102 108.427 102 L 109.853 102 110.177 100.363 C 110.355 99.463, 110.365 92.038, 110.200 83.863 L 109.900 69 108.450 69 L 107 69 107 85.500 M 48 90.048 L 48 97.214 46.250 96.505 C 45.288 96.115, 41.677 94.717, 38.227 93.398 L 31.954 91 28.977 91 L 26 91 26 92.500 C 26 93.325, 26.125 94, 26.277 94 C 26.430 94, 31.436 96.017, 37.402 98.482 L 48.249 102.964 49.124 102.423 L 50 101.882 50 93 L 50 84.118 49 83.500 L 48 82.882 48 90.048 M 118.750 85.875 C 118.338 87.731, 118 90.206, 117.999 91.375 L 117.998 93.500 115.118 99.500 L 112.237 105.500 108.369 109.095 C 106.241 111.072, 102.925 113.627, 101 114.772 L 97.499 116.854 90.854 118.012 L 84.208 119.169 78.057 117.593 L 71.907 116.017 67.203 112.899 L 62.500 109.780 59.250 105.782 C 55.462 101.122, 55.184 101.480, 58.118 107.232 L 60.237 111.384 64.368 115.357 L 68.500 119.330 72.512 121.106 L 76.524 122.883 87.524 123.098 L 98.524 123.313 101.065 121.907 C 102.463 121.133, 107.049 116.791, 111.256 112.258 L 118.906 104.016 119.510 100.758 C 119.842 98.966, 119.975 94.125, 119.806 90 L 119.500 82.500 118.750 85.875 M 132.827 93.150 L 125.155 96.248 124.522 98.769 L 123.889 101.289 124.735 102.135 L 125.581 102.981 131.040 100.921 C 145.349 95.524, 148.980 93.883, 148.992 92.809 C 149.004 91.756, 147.817 91.235, 143.992 90.617 L 140.500 90.053 132.827 93.150 M 9.250 114.603 C 8.012 116.015, 7.003 117.244, 7.006 117.335 C 7.009 117.426, 8.908 117.574, 11.227 117.664 L 15.443 117.827 13.677 116.839 L 11.912 115.852 12.524 113.926 L 13.135 112 12.317 112.018 C 11.868 112.028, 10.488 113.191, 9.250 114.603 M 157.399 115.547 L 156.760 118.093 157.425 118.759 L 158.091 119.424 160.190 118.113 L 162.290 116.802 161.676 118.401 L 161.063 120 161.924 120 C 162.980 120, 164 117.503, 164 114.918 L 164 113 162.550 113 L 161.099 113 159.974 114.750 L 158.849 116.500 159.393 114.750 L 159.937 113 158.988 113 L 158.038 113 157.399 115.547 M 10.465 121.057 L 9.812 122.114 10.408 124.490 L 11.005 126.867 13.114 127.536 L 15.223 128.206 16.796 126.632 L 18.370 125.059 17.016 122.530 L 15.662 120 13.390 120 L 11.118 120 10.465 121.057 M 154.468 122.101 L 153.801 124.201 154.858 125.258 L 155.915 126.315 157.645 124.908 L 159.374 123.500 158.687 125.334 L 157.999 127.167 159.154 126.782 C 159.789 126.570, 160.648 125.480, 161.063 124.359 L 161.817 122.321 160.969 120.950 L 160.122 119.580 157.891 121.540 L 155.661 123.500 156.299 121.750 L 156.937 120 156.036 120 C 155.540 120, 154.835 120.945, 154.468 122.101 M 12.393 123.582 C 12.727 124.452, 13 125.352, 13 125.582 C 13 125.812, 13.675 126, 14.500 126 L 16 126 16 124 L 16 122 13.893 122 L 11.786 122 12.393 123.582 M 55.049 125.332 L 47.599 128.523 45.723 131.734 L 43.848 134.945 44.443 135.908 L 45.039 136.872 50.769 134.356 C 57.496 131.403, 59.372 130.626, 63.771 128.971 C 65.571 128.294, 67.302 127.320, 67.619 126.807 L 68.196 125.874 66.443 123.937 C 64.217 121.478, 63.982 121.507, 55.049 125.332 M 108.674 123.162 C 107.754 123.678, 107 124.495, 107 124.980 L 107 125.860 111.750 128.072 C 114.362 129.289, 118.075 130.972, 120 131.812 C 121.925 132.652, 124.945 134.031, 126.711 134.876 L 129.921 136.412 130.552 135.782 L 131.183 135.151 130.524 133.074 L 129.865 130.998 127.907 129.950 C 126.830 129.374, 122.439 127.400, 118.149 125.564 L 110.349 122.225 108.674 123.162 M 151.183 128.078 L 149.885 130.157 151.065 131.578 L 152.245 133 153.922 133 C 156.037 133, 158.010 131.074, 157.968 129.050 L 157.936 127.500 156.608 129.250 C 155.877 130.213, 154.902 131, 154.440 131 L 153.600 131 154.776 129.824 L 155.952 128.648 154.854 127.324 C 153.354 125.517, 152.698 125.652, 151.183 128.078 M 16.655 128.829 C 14.641 131.054, 14.592 132.060, 16.379 134.503 L 17.758 136.389 20.411 134.651 L 23.064 132.912 22.419 131.869 L 21.774 130.826 20.687 131.913 C 20.089 132.511, 18.790 133, 17.800 133 L 16 133 16 132.035 C 16 131.505, 16.900 130.589, 18 130 C 19.100 129.411, 20 128.495, 20 127.965 C 20 126.439, 18.458 126.837, 16.655 128.829 M 91.956 131.616 C 91.409 133.055, 89.584 137.540, 87.901 141.583 L 84.841 148.934 85.170 150.634 C 85.352 151.569, 85.995 152.499, 86.600 152.701 L 87.701 153.067 90.942 145.283 C 92.724 141.003, 94.817 136.022, 95.591 134.216 C 96.366 132.410, 97 130.497, 97 129.966 L 97 129 94.975 129 L 92.950 129 91.956 131.616 M 148.574 132.880 L 147.958 133.877 149.729 134.908 L 151.500 135.939 148.750 135.970 L 146 136 146 136.845 C 146 137.310, 146.903 138.507, 148.006 139.506 L 150.012 141.321 150.649 140.685 L 151.285 140.048 150.020 138.524 L 148.755 137 151.461 137 L 154.167 137 153.779 135.836 C 153.565 135.195, 152.445 134.044, 151.290 133.277 L 149.191 131.883 148.574 132.880 M 21.250 135.678 C 20.012 136.539, 19 137.687, 19 138.229 L 19 139.214 20.500 138.638 L 22 138.063 22 139.972 L 22 141.882 23 142.500 L 24 143.118 24 141.559 L 24 140 25.066 140 L 26.133 140 25.816 137.327 L 25.500 134.654 24.500 134.383 C 23.950 134.234, 22.488 134.816, 21.250 135.678 M 140.750 141.861 C 139.238 143.404, 138 145.240, 138 145.942 L 138 147.217 140.500 146.589 L 143 145.962 143 146.898 C 143 147.412, 142.438 148.034, 141.750 148.280 L 140.500 148.726 141.226 149.506 L 141.952 150.285 143.476 149.020 L 145 147.755 145 145.878 L 145 144 143.700 144 C 142.985 144, 141.860 144.540, 141.200 145.200 L 140 146.400 140 145.355 C 140 144.780, 140.854 143.537, 141.899 142.592 L 143.798 140.873 145.427 143.187 L 147.056 145.500 147.944 144.078 L 148.831 142.655 146.508 140.828 C 143.642 138.573, 144.043 138.501, 140.750 141.861 M 28.643 145.190 L 26.786 147.214 28.393 148.821 L 30 150.429 30 148.683 L 30 146.937 31.500 146.362 L 33 145.786 33 144.393 L 33 143 31.750 143.083 C 31.063 143.129, 29.664 144.077, 28.643 145.190 M 32.483 148.667 L 30.735 151.333 32.618 152.711 L 34.500 154.089 36.925 153.482 L 39.349 152.874 38.137 154.335 L 36.925 155.796 39.675 157.959 L 42.425 160.122 44.274 159.639 L 46.122 159.155 46.668 160.578 C 46.968 161.360, 47.616 162, 48.107 162 L 49 162 49 159 L 49 156 47.723 156 C 47.020 156, 45.557 156.596, 44.473 157.325 L 42.500 158.651 40.605 156.681 L 38.711 154.711 41.605 155.371 L 44.500 156.031 42.500 154.412 L 40.500 152.793 42.750 153.464 L 45 154.135 45 153.067 L 45 152 43.250 151.842 C 42.288 151.756, 40.938 151.706, 40.250 151.731 L 39 151.778 39 150.544 C 39 149.343, 35.900 146, 34.786 146 C 34.480 146, 33.444 147.200, 32.483 148.667 M 136.184 148.504 L 137.325 151.008 136.669 151.665 L 136.012 152.321 134.006 150.506 L 132 148.690 132 150.145 C 132 152.096, 134.014 154, 136.078 154 L 137.755 154 138.996 152.505 L 140.237 151.010 138.595 148.505 C 137.692 147.127, 136.524 146, 135.998 146 L 135.043 146 136.184 148.504 M 127.199 152.856 L 125.898 153.681 127.109 156.341 L 128.321 159 129.538 159 C 130.207 159, 131.297 158.347, 131.960 157.548 L 133.165 156.096 132.515 154.048 L 131.865 152 130.183 152.015 C 129.257 152.024, 127.914 152.402, 127.199 152.856 M 120.317 157.733 L 120.804 159.965 118.963 158.980 L 117.121 157.995 116.554 158.913 L 115.986 159.832 116.991 162.476 L 117.996 165.120 118.954 164.528 L 119.913 163.936 119.398 162.596 L 118.884 161.255 121.442 161.744 L 124 162.233 123.978 161.367 C 123.966 160.890, 123.027 159.375, 121.893 158 L 119.830 155.500 120.317 157.733 M 51.035 159.934 C 49.594 162.627, 49.738 163.685, 51.643 164.417 L 53.286 165.047 53.864 164.469 L 54.442 163.891 53.118 163.073 L 51.794 162.254 52.932 160.127 L 54.070 158 53.070 158 C 52.520 158, 51.605 158.870, 51.035 159.934 M 112 160.091 L 110.500 161.152 111.750 161.659 L 113 162.167 113 164.083 L 113 166 114.607 166 L 116.214 166 115.473 164.250 C 115.066 163.287, 114.765 161.713, 114.804 160.750 C 114.886 158.750, 114.143 158.576, 112 160.091 M 60.123 163.629 C 58.787 166.561, 59.196 167.619, 61.183 166.378 C 61.908 165.926, 63.104 165.465, 63.842 165.353 C 64.580 165.241, 65.479 164.855, 65.840 164.493 L 66.497 163.836 64.557 162.418 C 61.915 160.486, 61.504 160.599, 60.123 163.629 M 102.115 162.908 L 100.729 163.785 101.384 166.393 L 102.038 169 103.019 169 C 103.559 169, 104 168.592, 104 168.094 L 104 167.187 106 167.710 L 108 168.233 108 167.682 C 108 167.378, 107.561 165.976, 107.025 164.565 L 106.050 162 104.775 162.015 C 104.074 162.024, 102.877 162.425, 102.115 162.908 M 67.076 165.250 C 65.505 167.765, 65.747 168.659, 67.864 168.173 L 69.287 167.846 70.089 169.144 L 70.891 170.442 71.541 169.793 L 72.190 169.143 71.516 166.072 L 70.841 163 69.661 163 L 68.481 163 67.076 165.250 M 95.586 164.043 L 92.671 164.915 91.836 164.398 L 91 163.882 91 164.847 L 91 165.813 89 165.290 L 87 164.767 87 167.883 L 87 171 88 171 L 89 171 89.032 169.250 L 89.064 167.500 90.392 169.250 C 91.123 170.213, 92.233 171, 92.860 171 L 94 171 94.116 168.750 L 94.232 166.500 94.689 168.250 L 95.147 170 98.323 169.900 L 101.500 169.801 99.483 169.150 L 97.466 168.500 97.483 166.717 L 97.500 164.933 99 163.982 L 100.500 163.031 99.500 163.101 C 98.950 163.140, 97.189 163.564, 95.586 164.043 M 73.627 165.529 C 73.282 166.428, 73 167.788, 73 168.550 L 73 169.937 74.513 169.357 L 76.025 168.776 77.397 169.915 L 78.769 171.053 78.607 167.776 L 78.446 164.500 76.350 164.197 L 74.255 163.894 73.627 165.529 M 80.750 165.662 L 82 166.167 82 168.583 L 82 171 83 171 L 84 171 84 168.583 L 84 166.167 85.250 165.662 L 86.500 165.158 83 165.158 L 79.500 165.158 80.750 165.662" stroke="none" fill="#201d16" fill-rule="evenodd"/><path d="M 81.463 29.750 C 79.943 33.462, 77.636 38.931, 76.336 41.902 C 75.035 44.874, 74.176 47.509, 74.426 47.759 C 75.053 48.386, 95.995 48.620, 96.019 48 C 96.071 46.664, 85.607 23, 84.965 23 C 84.558 23, 82.982 26.038, 81.463 29.750 M 41.479 44.750 C 41.865 46.813, 42.975 50.300, 43.946 52.500 C 44.916 54.700, 46.723 59.004, 47.962 62.064 L 50.214 67.628 55.813 61.757 L 61.412 55.887 63.502 56.411 L 65.592 56.936 65.539 54.718 C 65.510 53.498, 65.155 51.984, 64.748 51.354 L 64.010 50.208 53.036 45.604 C 47 43.072, 41.773 41, 41.420 41 L 40.777 41 41.479 44.750 M 119.500 45.838 C 114.550 47.915, 109.159 50.330, 107.520 51.206 L 104.539 52.797 112.020 59.833 L 119.500 66.868 120.150 66.184 C 120.507 65.808, 122.217 62.138, 123.950 58.028 C 125.682 53.919, 127.608 50.242, 128.229 49.858 C 128.851 49.474, 129.481 48.561, 129.629 47.830 C 129.778 47.098, 130.200 45.487, 130.566 44.250 L 131.233 42 129.867 42.031 C 129.115 42.048, 124.450 43.761, 119.500 45.838 M 71.463 54.824 L 67.427 56.711 60.789 64.057 L 54.151 71.402 52.953 77.750 L 51.755 84.097 52.429 89.299 C 52.800 92.159, 53.601 96.188, 54.210 98.250 L 55.317 102 56.265 102 L 57.214 102 56.618 103.552 L 56.023 105.104 56.874 104.578 L 57.726 104.052 60.893 107.532 C 62.635 109.447, 65.857 112.147, 68.052 113.533 L 72.043 116.053 78.126 117.611 L 84.208 119.169 90.854 118.012 L 97.499 116.854 101 114.772 C 102.925 113.627, 106.226 111.072, 108.336 109.095 L 112.173 105.500 114.660 100.638 L 117.147 95.776 118.229 89.638 C 119.739 81.062, 119.646 80.352, 115.967 72.495 C 114.165 68.648, 112.741 65.222, 112.801 64.883 C 112.972 63.928, 109.047 60.745, 103 56.936 L 97.500 53.471 86.500 53.204 L 75.500 52.936 71.463 54.824 M 62.780 69.064 L 61.059 70.066 59.991 74.033 L 58.923 78 59.950 81.815 L 60.978 85.630 63.489 87.989 L 66 90.349 66 93.567 L 66 96.786 64.615 97.318 L 63.230 97.849 61.115 96.368 L 59 94.887 59 97.372 L 59 99.857 60.571 101.429 C 61.436 102.293, 62.786 103, 63.571 103 L 65 103 66.944 101.056 L 68.888 99.112 69.574 95.459 L 70.259 91.807 69.146 88.094 L 68.034 84.380 65.517 82.016 L 63 79.651 63 76.701 L 63 73.750 66 74.350 L 69 74.950 69 73.046 L 69 71.143 67.429 69.571 C 65.611 67.754, 65.119 67.700, 62.780 69.064 M 96.422 70.087 L 94.533 72.173 94.533 77.939 L 94.533 83.704 97.767 87.387 L 101 91.070 101 93.412 L 101 95.755 99.682 96.849 L 98.364 97.943 96.182 96.415 L 94 94.887 94 97.965 L 94 101.043 96.374 102.124 L 98.747 103.206 100.840 102.086 L 102.932 100.966 104.027 96.899 L 105.122 92.833 104.466 89.666 L 103.810 86.500 100.905 82.809 L 98 79.117 98 76.434 L 98 73.750 101 74.350 L 104 74.950 104 73.032 L 104 71.113 101.777 69.557 C 98.931 67.563, 98.683 67.588, 96.422 70.087 M 72.667 69.667 L 72 70.333 72 86.167 L 72 102 73.500 102 L 75 102 75.030 89.750 L 75.061 77.500 75.897 79 C 76.356 79.825, 77.033 82.525, 77.399 85 C 77.766 87.475, 78.552 92.336, 79.145 95.802 L 80.223 102.104 81.839 101.793 L 83.454 101.481 85.626 89.491 L 87.798 77.500 87.899 89.750 L 88 102 89.500 102 L 91 102 91 85.500 L 91 69 89.059 69 C 86.464 69, 86.237 69.501, 84.446 79.161 C 83.596 83.748, 82.619 88.400, 82.275 89.500 L 81.651 91.500 79.833 81.500 C 78.833 76, 77.801 70.938, 77.539 70.250 L 77.063 69 75.198 69 C 74.172 69, 73.033 69.300, 72.667 69.667 M 107 85.500 L 107 102 108.427 102 L 109.853 102 110.177 100.363 C 110.355 99.463, 110.365 92.038, 110.200 83.863 L 109.900 69 108.450 69 L 107 69 107 85.500 M 35.047 80.935 L 23.594 85.719 23.238 86.785 L 22.883 87.851 26.192 89.238 C 28.011 90, 32.875 91.779, 37 93.191 C 41.125 94.602, 45.288 96.085, 46.250 96.485 L 48 97.214 48 90.048 L 48 82.882 49.250 83.588 L 50.500 84.293 49.250 82.947 L 48 81.600 48 78.800 L 48 76 47.250 76.076 C 46.837 76.117, 41.346 78.304, 35.047 80.935 M 122.032 86.250 L 122.064 95.500 123.532 97.441 L 125 99.382 125 97.834 L 125 96.286 133.392 93.042 L 141.785 89.797 144.142 90.464 L 146.500 91.131 145.166 90.205 L 143.832 89.278 145.416 88.671 L 147 88.063 147 86.531 L 147 85 145.945 85 C 145.365 85, 143.002 84.158, 140.695 83.128 C 134.280 80.266, 125.096 77, 123.462 77 L 122 77 122.032 86.250 M 111.501 111.789 L 104.502 119.257 106.885 120.840 C 108.196 121.710, 109.848 122.507, 110.557 122.611 C 111.266 122.715, 115.931 124.603, 120.923 126.806 L 130 130.811 130 129.851 C 130 129.323, 129.150 127.002, 128.111 124.695 C 127.072 122.388, 124.781 117.013, 123.019 112.752 C 118.969 102.958, 119.719 103.021, 111.501 111.789 M 51.233 107.250 C 49.994 108.781, 42 128.219, 42 129.701 L 42 130.767 43.843 131.249 L 45.687 131.731 46.761 130.011 L 47.835 128.291 55.950 125.020 L 64.065 121.749 66.283 123.598 L 68.500 125.447 67.250 124.023 C 66.563 123.241, 66 121.822, 66 120.871 L 66 119.143 64.436 117.579 L 62.872 116.015 63.591 114.853 L 64.309 113.691 63.268 114.334 L 62.227 114.978 61.122 113.647 L 60.017 112.316 60.759 111.498 L 61.500 110.679 60.403 111.304 L 59.306 111.929 56.466 108.964 C 53.292 105.652, 52.687 105.454, 51.233 107.250 M 74.389 123.139 C 74.615 123.887, 76.979 130.474, 79.641 137.776 L 84.482 151.053 84.832 149.776 C 85.319 147.998, 90.830 134.372, 93.111 129.305 C 94.150 126.998, 95 124.635, 95 124.055 L 95 123 86.082 123 C 81.177 123, 76.447 122.725, 75.570 122.389 L 73.977 121.777 74.389 123.139" stroke="none" fill="#efdb14" fill-rule="evenodd"/>
            </g>
          </svg>
          <HeaderTitle variant='h7' sx={{ ...menuCollapsedStyles, ...(navCollapsed && !navHover ? {} : { ml: -1 }), width:'200px', color:'primary.main'}}>
            {themeConfig.templateName}
          </HeaderTitle>
        </StyledLink>
      )}

      {hidden ? (
        <IconButton
          disableRipple
          disableFocusRipple
          onClick={toggleNavVisibility}
          sx={{ p: 0, backgroundColor: 'transparent !important' }}
        >
          <Icon icon='mdi:close' fontSize={20} />
        </IconButton>
      ) : userMenuLockedIcon === null && userMenuUnlockedIcon === null ? null : (
        <IconButton
          disableRipple
          disableFocusRipple
          onClick={() => saveSettings({ ...settings, navCollapsed: !navCollapsed })}
          sx={{ p: 0, color: 'text.primary', backgroundColor: 'transparent !important' }}
        >
          {userMenuLockedIcon && userMenuUnlockedIcon ? (
            navCollapsed ? (
              userMenuUnlockedIcon
            ) : (
              userMenuLockedIcon
            )
          ) : (
            <Box
              width={22}
              fill='none'
              height={22}
              component='svg'
              viewBox='0 0 22 22'
              xmlns='http://www.w3.org/2000/svg'
              sx={{
                transform: `rotate(${svgRotationDeg()}deg)`,
                transition: 'transform .25s ease-in-out .35s'
              }}
            >
              <path
                fill={svgFillSecondary()}
                d='M11.4854 4.88844C11.0082 4.41121 10.2344 4.41121 9.75716 4.88844L4.51029 10.1353C4.03299 10.6126 4.03299 11.3865 4.51029 11.8638L9.75716 17.1107C10.2344 17.5879 11.0082 17.5879 11.4854 17.1107C11.9626 16.6334 11.9626 15.8597 11.4854 15.3824L7.96674 11.8638C7.48943 11.3865 7.48943 10.6126 7.96674 10.1353L11.4854 6.61667C11.9626 6.13943 11.9626 5.36568 11.4854 4.88844Z'
              />
              <path
                fill={svgFillDisabled()}
                d='M15.8683 4.88844L10.6214 10.1353C10.1441 10.6126 10.1441 11.3865 10.6214 11.8638L15.8683 17.1107C16.3455 17.5879 17.1193 17.5879 17.5965 17.1107C18.0737 16.6334 18.0737 15.8597 17.5965 15.3824L14.0779 11.8638C13.6005 11.3865 13.6005 10.6126 14.0779 10.1353L17.5965 6.61667C18.0737 6.13943 18.0737 5.36568 17.5965 4.88844C17.1193 4.41121 16.3455 4.41121 15.8683 4.88844Z'
              />
            </Box>
          )}
        </IconButton>
      )}
    </MenuHeaderWrapper>
  )
}

export default VerticalNavHeader
