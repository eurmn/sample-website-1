<script lang="ts">
  import Particles from 'svelte-particles';
  import { library, dom } from '@fortawesome/fontawesome-svg-core';
  import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons';

  library.add(faCaretRight, faCaretLeft);
  dom.watch();

  let particlesConfig = {
    'autoPlay': true,
    'background': {
      'color': {
        'value': '#141414'
      },
      'image': '',
      'position': '50% 50%',
      'repeat': 'no-repeat',
      'size': 'cover',
      'opacity': 0
    },
    'backgroundMask': {
      'composite': 'destination-out',
      'cover': {
        'color': {
          'value': '#fff'
        },
        'opacity': 1
      },
      'enable': false
    },
    'fullScreen': {
      'enable': false,
      'zIndex': 1
    },
    'detectRetina': true,
    'duration': 0,
    'fpsLimit': 120,
    'interactivity': {
      'detectsOn': 'window',
      'events': {
        'onClick': {
          'enable': true,
          'mode': 'repulse'
        },
        'onDiv': {
          'selectors': [],
          'enable': false,
          'mode': [],
          'type': 'circle'
        },
        'onHover': {
          'enable': true,
          'mode': 'connect',
          'parallax': {
            'enable': false,
            'force': 100,
            'smooth': 10
          }
        },
        'resize': true
      },
      'modes': {
        'attract': {
          'distance': 200,
          'duration': 0.4,
          'easing': 'ease-out-quad',
          'factor': 1,
          'maxSpeed': 50,
          'speed': 3
        },
        'bounce': {
          'distance': 200
        },
        'bubble': {
          'distance': 400,
          'duration': 2,
          'mix': false,
          'opacity': 0.8,
          'size': 40
        },
        'connect': {
          'distance': 100,
          'links': {
            'opacity': 0.5
          },
          'radius': 200
        },
        'grab': {
          'distance': 200,
          'links': {
            'blink': false,
            'consent': false,
            'opacity': 0.4
          }
        },
        'light': {
          'area': {
            'gradient': {
              'start': {
                'value': '#ffffff'
              },
              'stop': {
                'value': '#000000'
              }
            },
            'radius': 1000
          },
          'shadow': {
            'color': {
              'value': '#000000'
            },
            'length': 2000
          }
        },
        'push': {
          'default': true,
          'groups': [],
          'quantity': 4
        },
        'remove': {
          'quantity': 2
        },
        'repulse': {
          'distance': 200,
          'duration': 1,
          'factor': 1,
          'speed': 1,
          'maxSpeed': 50,
          'easing': 'ease-in-out'
        },
        'slow': {
          'factor': 3,
          'radius': 200
        },
        'trail': {
          'delay': 1,
          'pauseOnStop': false,
          'quantity': 1
        }
      }
    },
    'manualParticles': [],
    'motion': {
      'disable': true,
      'reduce': {
        'factor': 10,
        'value': true
      }
    },
    'particles': {
      'bounce': {
        'horizontal': {
          'random': {
            'enable': false,
            'minimumValue': 0.1
          },
          'value': 1
        },
        'vertical': {
          'random': {
            'enable': false,
            'minimumValue': 0.1
          },
          'value': 1
        }
      },
      'collisions': {
        'bounce': {
          'horizontal': {
            'random': {
              'enable': false,
              'minimumValue': 0.1
            },
            'value': 1
          },
          'vertical': {
            'random': {
              'enable': false,
              'minimumValue': 0.1
            },
            'value': 1
          }
        },
        'enable': false,
        'mode': 'bounce',
        'overlap': {
          'enable': true,
          'retries': 0
        }
      },
      'color': {
        'value': '#ffffff',
        'animation': {
          'h': {
            'count': 0,
            'enable': false,
            'offset': 0,
            'speed': 1,
            'sync': true
          },
          's': {
            'count': 0,
            'enable': false,
            'offset': 0,
            'speed': 1,
            'sync': true
          },
          'l': {
            'count': 0,
            'enable': false,
            'offset': 0,
            'speed': 1,
            'sync': true
          }
        }
      },
      'destroy': {
        'mode': 'none',
        'split': {
          'count': 1,
          'factor': {
            'random': {
              'enable': false,
              'minimumValue': 0
            },
            'value': 3
          },
          'rate': {
            'random': {
              'enable': false,
              'minimumValue': 0
            },
            'value': {
              'min': 4,
              'max': 9
            }
          },
          'sizeOffset': true
        }
      },
      'gradient': [],
      'groups': {},
      'life': {
        'count': 0,
        'delay': {
          'random': {
            'enable': false,
            'minimumValue': 0
          },
          'value': 0,
          'sync': false
        },
        'duration': {
          'random': {
            'enable': false,
            'minimumValue': 0.0001
          },
          'value': 0,
          'sync': false
        }
      },
      'links': {
        'blink': false,
        'color': {
          'value': '#ffffff'
        },
        'consent': false,
        'distance': 150,
        'enable': true,
        'frequency': 1,
        'opacity': 0.4,
        'shadow': {
          'blur': 5,
          'color': {
            'value': '#00ff00'
          },
          'enable': false
        },
        'triangles': {
          'enable': false,
          'frequency': 1
        },
        'width': 1,
        'warp': false
      },
      'move': {
        'angle': {
          'offset': 0,
          'value': 90
        },
        'attract': {
          'distance': 200,
          'enable': false,
          'rotate': {
            'x': 600,
            'y': 1200
          }
        },
        'decay': 0,
        'distance': {},
        'direction': 'none',
        'drift': 0,
        'enable': true,
        'gravity': {
          'acceleration': 9.81,
          'enable': false,
          'inverse': false,
          'maxSpeed': 50
        },
        'path': {
          'clamp': true,
          'delay': {
            'random': {
              'enable': false,
              'minimumValue': 0
            },
            'value': 0
          },
          'enable': false,
          'options': {}
        },
        'outModes': {
          'default': 'out',
          'bottom': 'out',
          'left': 'out',
          'right': 'out',
          'top': 'out'
        },
        'random': false,
        'size': false,
        'speed': 1,
        'spin': {
          'acceleration': 0,
          'enable': false
        },
        'straight': false,
        'trail': {
          'enable': false,
          'length': 10,
          'fillColor': {
            'value': '#000000'
          }
        },
        'vibrate': false,
        'warp': false
      },
      'number': {
        'density': {
          'enable': true,
          'area': 800,
          'factor': 1000
        },
        'limit': 0,
        'value': 100
      },
      'opacity': {
        'random': {
          'enable': true,
          'minimumValue': 0.1
        },
        'value': {
          'min': 0.1,
          'max': 0.5
        },
        'animation': {
          'count': 0,
          'enable': true,
          'speed': 3,
          'sync': false,
          'destroy': 'none',
          'startValue': 'random',
          'minimumValue': 0.1
        }
      },
      'orbit': {
        'animation': {
          'count': 0,
          'enable': false,
          'speed': 1,
          'sync': false
        },
        'enable': false,
        'opacity': 1,
        'rotation': {
          'random': {
            'enable': false,
            'minimumValue': 0
          },
          'value': 45
        },
        'width': 1
      },
      'reduceDuplicates': false,
      'repulse': {
        'random': {
          'enable': false,
          'minimumValue': 0
        },
        'value': 0,
        'enabled': false,
        'distance': 1,
        'duration': 1,
        'factor': 1,
        'speed': 1
      },
      'roll': {
        'darken': {
          'enable': false,
          'value': 0
        },
        'enable': false,
        'enlighten': {
          'enable': false,
          'value': 0
        },
        'mode': 'vertical',
        'speed': 25
      },
      'rotate': {
        'random': {
          'enable': false,
          'minimumValue': 0
        },
        'value': 0,
        'animation': {
          'enable': false,
          'speed': 0,
          'sync': false
        },
        'direction': 'clockwise',
        'path': false
      },
      'shadow': {
        'blur': 0,
        'color': {
          'value': '#000000'
        },
        'enable': false,
        'offset': {
          'x': 0,
          'y': 0
        }
      },
      'shape': {
        'options': {},
        'type': 'circle'
      },
      'size': {
        'random': {
          'enable': false,
          'minimumValue': 1
        },
        'value': {
          'min': 0.1,
          'max': 0.1
        },
        'animation': {
          'count': 0,
          'enable': true,
          'speed': 20,
          'sync': false,
          'destroy': 'none',
          'startValue': 'random',
          'minimumValue': 0.1
        }
      },
      'stroke': {
        'width': 0
      },
      'tilt': {
        'random': {
          'enable': false,
          'minimumValue': 0
        },
        'value': 0,
        'animation': {
          'enable': false,
          'speed': 0,
          'sync': false
        },
        'direction': 'clockwise',
        'enable': false
      },
      'twinkle': {
        'lines': {
          'enable': false,
          'frequency': 0.05,
          'opacity': 1
        },
        'particles': {
          'enable': false,
          'frequency': 0.05,
          'opacity': 1
        }
      },
      'wobble': {
        'distance': 5,
        'enable': false,
        'speed': 50
      },
      'zIndex': {
        'random': {
          'enable': false,
          'minimumValue': 0
        },
        'value': 0,
        'opacityRate': 1,
        'sizeRate': 1,
        'velocityRate': 1
      }
    },
    'pauseOnBlur': true,
    'pauseOnOutsideViewport': true,
    'responsive': [],
    'style': {
      'right': '0',
      'top': '0',
      'position': 'absolute',
      'width': '100vw',
      'height': '100vh',
    },
    'themes': [],
    'zLayers': 100
  };
</script>

<section id="main-bg" class="w-full h-[100vh] bg-gradient-to-tr from-indigo-900 to-blue-800 px-56 py-8 antialiased relative">
  <Particles
    id="tsparticles"
    options="{particlesConfig}"
  />
  <header class="absolute left-0 mt-10 w-full text-4xl font-quicksand flex justify-center items-center">
    <span class="m-1 mx-4 underline">home</span>
    <span class="m-1 mx-4">sobre</span>
    <span class="text-8xl mx-4 font-dosis">SEU NEGÓCIO</span>
    <span class="m-1 mx-4">contato</span>
    <span class="m-1 mx-4">log in</span>
  </header>
  <div class="mt-36 ml-10">
    <div class="flex w-full justify-center h-full items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <i class="fa-solid fa-caret-left inline flex-1 fa-5x text-white/90 cursor-pointer"></i>
      <span class="w-1/2 text-center">
        <span class="text-5xl font-inter font-extrabold text-[#78FFA6]">Breve descrição do seu negócio</span>
        <br>
        <span class="text-2xl text-center font-quicksand">lorem ipsum faucibus sem fermentum leo nam ac fames, scelerisque sit orci sodales malesuada tristique. </span>
      </span>
      <i class="fa-solid fa-caret-right inline flex-1 fa-5x text-white/90 cursor-pointer"></i>
    </div>
  </div>
  <span class="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center">
    <span class="w-10 h-10 rounded-full bg-white/60 mx-2"/>
    <span class="w-12 h-12 rounded-full bg-[#78FFA6] mx-2"/>
    <span class="w-10 h-10 rounded-full bg-white/60 mx-2"/>
  </span>
</section>
<section class="h-[50vh] bg-[#EAEAEA] flex flex-col justify-center px-64 font-quicksand text-5xl">
  <span class="text-black">TÍTULO DA DESCRIÇÃO</span>
  <span class="text-2xl text-[#888888] w-3/4 indent-5">
    <br>
    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
    <br>
    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </span>
</section>
<section class="h-[60vh] relative text-black px-64 flex flex-col">
  <span class="absolute bottom-0 left-1/2 -translate-x-1/2 font-inter flex flex-col items-center my-4">
    <span>Nos siga nas redes sociais!</span>
    <span class="flex justify-evenly my-2 w-full">
      <span class="h-10 w-10 rounded-full bg-[cornflowerblue]"/>
      <span class="h-10 w-10 rounded-full bg-[cornflowerblue]"/>
      <span class="h-10 w-10 rounded-full bg-[cornflowerblue]"/>
    </span>
    <span class="underline">seunegocio@dominio.com.br</span>
    <span>+55 (99) 999999999</span>
  </span>
  <span class="font-quicksand text-5xl mt-8">FEED</span>
  <span class="h-1/2 w-full flex justify-evenly relative items-center">
    <span class="h-4/5 aspect-[16/9] bg-[#C4C4C4] rounded-3xl relative
      before:w-full before:h-4/5 before:content-[''] before:bg-[#414141] before:absolute before:rounded-b-3xl before:bottom-0">
      <div class="font-quicksand text-center w-full h-1/5 align-middle text-xl font-normal pt-2">Título Feed 1</div>
    </span>
    <span class="h-4/5 aspect-[16/9] bg-[#C4C4C4] rounded-3xl relative
      before:w-full before:h-4/5 before:content-[''] before:bg-[#414141] before:absolute before:rounded-b-3xl before:bottom-0">
      <div class="font-quicksand text-center w-full h-1/5 align-middle text-xl font-normal pt-2">Título Feed 2</div>
    </span>
    <span class="h-4/5 aspect-[16/9] bg-[#C4C4C4] rounded-3xl relative
      before:w-full before:h-4/5 before:content-[''] before:bg-[#414141] before:absolute before:rounded-b-3xl before:bottom-0">
      <div class="font-quicksand text-center w-full h-1/5 align-middle text-xl font-normal pt-2">Título Feed 3</div>
    </span>
    <i class="fa-solid fa-caret-right fa-5x text-[#414141] cursor-pointer"></i>
  </span>
</section>

<style>
</style>