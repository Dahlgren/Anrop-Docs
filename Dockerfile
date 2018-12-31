FROM node:onbuild
RUN npm run build
EXPOSE 8080
CMD npm run serve
